# PdfStamper.PdfStamperJobResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completionTime** | **Date** | The completion date/time of this job in ISO 8601 format | [optional] 
**jobId** | **String** | The job id | [optional] 
**request** | [**PdfStamperJobRequest**](PdfStamperJobRequest.md) | The request settings used during executing the PDF Stamper job | [optional] 
**jobStatus** | **String** | The status of the job | [optional] 
**creationTime** | **Date** | The creation date/time of this job in ISO 8601 format | [optional] 
**inputResults** | [**[InputResultLocation]**](InputResultLocation.md) | The input(s) and result(s) streamlocation pairs | [optional] 
**updateTime** | **Date** | The last update date/time of this job in ISO 8601 format | [optional] 
**statusMessage** | **String** | A status message, which can be informational, warning or error. A message here does not indicate an error per se | [optional] 
**queueTime** | **Date** | The PDF Stamper queue date/time of this job in ISO 8601 format | [optional] 


<a name="JobStatusEnum"></a>
## Enum: JobStatusEnum


* `CREATED` (value: `"CREATED"`)

* `INPUTS_UPLOADED` (value: `"INPUTS_UPLOADED"`)

* `PROCESSING` (value: `"PROCESSING"`)

* `DONE` (value: `"DONE"`)

* `ERROR` (value: `"ERROR"`)

* `DELETED` (value: `"DELETED"`)




