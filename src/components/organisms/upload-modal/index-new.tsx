import React, { ReactNode, useState } from "react"
import clsx from "clsx"

import Modal from "../../molecules/modal"
import Button from "../../fundamentals/button/index-new"
import FileIconNew from "../../fundamentals/icons/file-icon-new"
import TrashIcon from "../../fundamentals/icons/trash-icon"
import DownloadIcon from "../../fundamentals/icons/download-icon"
import XCircleIcon from "../../fundamentals/icons/x-circle-icon"
import CheckCircleIcon from "../../fundamentals/icons/check-circle-icon"
import WarningCircle from "../../fundamentals/icons/warning-circle"
import HourGlass from "../../fundamentals/icons/hour-glass"
import CrossIcon from "../../fundamentals/icons/cross-icon"
import ProgressBar from "./components/progress-bar"
import CheckIcon from "../../fundamentals/icons/check-icon-new"
import { ArrowBigRightIcon } from "lucide-react"

type FileSummaryProps = {
  name: string
  size: number
  action: () => void;
  progress?: number
  status?: string
  canImport?: boolean
}

/**
 * Render an upload file summary (& upload progress).
 */
function FileSummary(props: FileSummaryProps) {
  const { action, name, progress, size, status, canImport } = props

  const formattedSize =
    size / 1024 < 10
      ? `${(size / 1024).toFixed(2)} KiB`
      : `${(size / (1024 * 1024)).toFixed(2)} MiB`

  return (
    <div className="flex flex-col gap-2 justify-center w-full ">
      {!canImport ? <ProgressBar 
        progress={progress-50}
        progressBarColorHex="#F2890E"
        label={<p className="flex items-center gap-3">
          <HourGlass />
          <span className="text-hex-33">Uploading</span>   
          <span className="flex items-center gap-1 text-hex-99">
            <span>1.8MB</span>
            <span>/</span>
            <span>4.9MB</span>
          </span>
        </p>}
        cancelIcon={<CrossIcon size={16} />}
        cancelLabel="Cancel"
        onCancel={action}
      /> : 
      <ProgressBar 
        progress={progress}
        progressBarColorHex="#33BD49"
        label={<p className="flex items-center gap-3">
          <CheckIcon />
          <span className="text-hex-33">{name} {status || formattedSize}</span>   
          <span className="flex items-center gap-1 text-hex-99">
            <span>1.8MB</span>
            <span>/</span>
            <span>4.9MB</span>
          </span>
        </p>}
        cancelIcon={<TrashIcon size={16} />}
        cancelLabel={"Delete"}
        onCancel={action}
      />}
      
      
    </div>
  )
}

type UploadSummaryProps = {
  creations: number
  updates: number
  rejections?: number
  type: string
}

/**
 * Render a batch update request summary.
 */
function UploadSummary(props: UploadSummaryProps) {
  const { creations, updates, rejections, type } = props
  return (
    <div className="flex gap-6">
      <div className="flex items-center text-small text-grey-90">
        <CheckCircleIcon color="#9CA3AF" className="mr-2" />
        <span className="font-semibold"> {creations}&nbsp;</span> new {type}
      </div>
      {updates && (
        <div className="flex items-center text-small text-grey-90">
          <WarningCircle fill="#9CA3AF" className="mr-2" />
          <span className="font-semibold">{updates}&nbsp;</span> updates
        </div>
      )}
      {rejections && (
        <div className="flex items-center text-small text-grey-90">
          <XCircleIcon color="#9CA3AF" className="mr-2" />
          <span className="font-semibold">{rejections}&nbsp;</span> rejections
        </div>
      )}
    </div>
  )
}

type DropAreaProps = {
  onUpload: (d: DataTransferItem) => void
}

/**
 * Component handles an CSV file drop.
 */
function DropArea(props: DropAreaProps) {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleFileDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(false)

    if (e.dataTransfer.items?.length) {
      props.onUpload(e.dataTransfer.items[0].getAsFile())
    }
  }

  const handleFileSelect = (e) => {
    props.onUpload(e.target.files[0])
  }

  const onDragOver = (event) => {
    event.stopPropagation()
    event.preventDefault()
  }

  return (
    <div
      onDragEnter={() => setIsDragOver(true)}
      onDragLeave={() => setIsDragOver(false)}
      onDragOver={onDragOver}
      onDrop={handleFileDrop}
      className={clsx(
        "flex flex-col gap-2 items-center justify-center w-full h-64 border border-hex-99 border-dashed cursor-pointer bg-hex-f7",
        { "opacity-50": isDragOver }
      )}
    >
      <FileIconNew size={41} />
      <span className="text-grey-50 text-small">

        Drag & drop or 
        <a className="text-violet-60">
          <label className="cursor-pointer" htmlFor="upload-form-file">
            {" "}
            Choose a File
          </label>
          <input
            type="file"
            id="upload-form-file"
            className="hidden"
            // multiple
            accept="text/csv"
            onChange={handleFileSelect}
          />
        </a>
      </span>
    </div>
  )
}

type UploadModalProps = {
  type: string
  status?: string
  fileTitle: string
  description1Text: string
  description2Title: string
  description2Text: string
  templateLink: string
  canImport?: boolean
  progress?: number
  onClose: () => void
  onSubmit: () => void
  onFileRemove: () => void
  processUpload: (...args: any[]) => Promise<any>
  summary?: { toCreate?: number; toUpdate?: number }
}

/**
 * Upload prices modal.
 */
function UploadModal(props: UploadModalProps) {
  const {
    description1Text,
    description2Text,
    description2Title,
    fileTitle,
    canImport,
    processUpload,
    onClose,
    onSubmit,
    onFileRemove,
    templateLink,
    progress,
    summary,
    status,
    type,
  } = props
  const [uploadFile, setUploadFile] = useState<File>()

  const { name, size } = uploadFile || {}

  const onUpload = async (file) => {
    setUploadFile(file)
    await processUpload(file)
  }

  const removeFile = () => {
    setUploadFile(undefined)
    onFileRemove()
  }

  return (
    <div className="flex flex-col gap-4 font-architects">
          <p className='text-hex-33 text-base'>
            Attach your CSV that contains product data below. 
          </p>
          <p className="text-negative text-base">
            IMPORTANT: Having a UPC or SKU column is required to link the products with Infiplex!
          </p>

          
          <div className="flex flex-col gap-2.5 pt-2">
            <p className='text-hex-33 text-base'>
              CSV to Import <span className="px-1 text-negative">*</span>
            </p>
            {!uploadFile ? (
              <DropArea onUpload={onUpload} />
            ) : (
              <FileSummary
                size={size!}
                name={name!}
                status={status}
                // progress={progress}
                // TODO: change this to actual progress once this we can track upload
                progress={100}
                action={removeFile}
                canImport={canImport}
              />
            )}
          </div>
          {summary && (
            <UploadSummary
              creations={summary.toCreate}
              updates={summary.toUpdate}
              type={type}
            />
          )}
        <div className="flex items-center justify-between gap-2 border-t border-dotted border-hex-cc pt-10 mt-10">
            <Button
              variant="secondary"
              className="mr-2 text-small justify-center"
              size="small"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              size="small"
              disabled={!canImport}
              variant="primary"
              onClick={onSubmit}
            >
              Import List <ArrowBigRightIcon />
            </Button>
          </div>
    </div>
  )
}

export default UploadModal
