import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import BackButton from "../../../components/atoms/back-button"
import ImportProducts from "../batch-job/import-new"
import Breadcrumb from "../../../components/molecules/breadcrumb"

import Stepper from "./components/stepper" // Adjust the import path according to your file structure
import { ArrowBigLeftIcon, ArrowBigRightIcon, CheckIcon, X } from "lucide-react"
import CsvTableMap from "./components/csv-table-map"
import Button from "../../../components/fundamentals/button/index-new"

const Import = () => {
  const navigate = useNavigate()

  const [activeStep, setActiveStep] = useState(1)
  const [csvFile, setCsvFile] = useState<File | null>(null)

  const steps = ["Upload CSVs", "Match Columns", "Fix Issues", "Confirm Data"]

  const handleContinue = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1)
    }
  }

  const handleGoBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1)
    }
  }

  const isLastStep = activeStep === steps.length
  const showGoBack = activeStep > 1

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6 border-b border-hex-cc bg-hex-ee py-8 px-12">
        <Breadcrumb
          currentPage="Products"
          previousBreadcrumb="Catalog"
          previousRoute="/a/catalog"
        />
        <div className="mb-4 flex w-full items-center justify-between">
          <h1 className="text-2xl text-hex-33">Import Products</h1>
          <Stepper steps={steps} activeStep={activeStep} />
        </div>
      </div>
      {activeStep == 1 && (
        <div className="px-12">
          <ImportProducts handleClose={() => {}} setCsvFile={setCsvFile} />
        </div>
      )}
      {activeStep == 2 && (
        <div className="">
          <CsvTableMap file={csvFile} />
        </div>
      )}
      <div className="mx-12 mt-10 flex items-center justify-between gap-2 border-t border-dotted border-hex-cc pt-10">
        <Button
          variant="secondary"
          className="mr-2 justify-center text-small"
          size="small"
          onClick={() => navigate("/a/catalog/products")}
        >
          Cancel
        </Button>

        <div className="flex items-center gap-5">
          <Button size="small" variant="primary" onClick={handleGoBack}>
            <ArrowBigLeftIcon /> Go Back
          </Button>

          <Button size="small" variant="primary" onClick={handleContinue}>
            Continue <ArrowBigRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Import
