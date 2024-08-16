import React, { useEffect, useState } from "react";
import { parse } from "papaparse";
import { File } from "../../../../components/organisms/table-container/types"

const options = [
  "Brand",
  "Category",
  "Description",
  "Height (inches)",
  "Image URL (would download and attach to product listing)",
  "Length (inches)",
  "Name",
  "Price - List",
  "Price - MAP",
  "Price - Sale",
  "SKU",
  "UPC",
  "Weight (pounds)",
  "Width (inches)",
  "- Any Attributes -",
];

type CsvData = string[][];

// Function to convert column index to Excel-style column names (A, B, C, ..., Z, AA, AB, ...)
const getColumnName = (index: number): string => {
  let columnName = '';
  while (index >= 0) {
    columnName = String.fromCharCode((index % 26) + 65) + columnName;
    index = Math.floor(index / 26) - 1;
  }
  return columnName;
};

const CsvTableMap = ({ file }: {file: File}) => {
  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<string[][]>([]);

  useEffect(()=>{
    if (!file) return;

    parse(file, {
      complete: (result) => {
        const data = result.data as CsvData;

        // Extract the original headers from the first row
        const originalHeaders = data[0];

        // Filter out columns that are completely empty
        const filteredHeaders = originalHeaders.filter((_, colIndex) =>
          data.slice(1).some((row) => row[colIndex]?.trim())
        );

        // Generate Excel-style headers (A, B, C, ..., Z, AA, AB, ...)
        const excelHeaders = filteredHeaders.map((_, index) => getColumnName(index));

        // Set the rows excluding the first row (headers) and filter empty columns
        const filteredRows = data.slice(1).map((row) =>
          row.filter((_, colIndex) => originalHeaders[colIndex] && row[colIndex]?.trim())
        );

        setHeaders(excelHeaders);
        setRows(filteredRows);
      },
    });
  }, [file])

  return (
    <>
      {headers?.length > 0 && (
        <div className="overflow-x-auto max-w-[83vw] w-full focus:outline-none">
          <table className="table-fixed border-collapse border border-gray-300">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index} className="border uppercase font-normal w-[212px] h-[38px] bg-hex-99 text-white">
                    <span className="block w-[212px]">
                      {header}
                    </span>
                  </th>
                ))}
              </tr>
              <tr>
                {headers.map((_, index) => (
                  <td key={index} className="border px-4 py-2">
                    <select className="w-full p-2 border rounded">
                      {options.map((option, i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border px-4 py-2 text-hex-33">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CsvTableMap;
