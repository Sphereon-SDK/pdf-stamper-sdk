
# PdfStamperJobResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completionTime** | [**OffsetDateTime**](OffsetDateTime.md) | The completion date/time of this job in ISO 8601 format |  [optional]
**jobId** | **String** | The job id |  [optional]
**request** | [**PdfStamperJobRequest**](PdfStamperJobRequest.md) | The request settings used during executing the PDF Stamper job |  [optional]
**jobStatus** | [**JobStatusEnum**](#JobStatusEnum) | The status of the job |  [optional]
**creationTime** | [**OffsetDateTime**](OffsetDateTime.md) | The creation date/time of this job in ISO 8601 format |  [optional]
**inputResults** | [**List&lt;InputResultLocation&gt;**](InputResultLocation.md) | The input(s) and result(s) streamlocation pairs |  [optional]
**updateTime** | [**OffsetDateTime**](OffsetDateTime.md) | The last update date/time of this job in ISO 8601 format |  [optional]
**statusMessage** | **String** | A status message, which can be informational, warning or error. A message here does not indicate an error per se |  [optional]
**queueTime** | [**OffsetDateTime**](OffsetDateTime.md) | The PDF Stamper queue date/time of this job in ISO 8601 format |  [optional]


<a name="JobStatusEnum"></a>
## Enum: JobStatusEnum
Name | Value
---- | -----
CREATED | &quot;CREATED&quot;
INPUTS_UPLOADED | &quot;INPUTS_UPLOADED&quot;
PROCESSING | &quot;PROCESSING&quot;
DONE | &quot;DONE&quot;
ERROR | &quot;ERROR&quot;
DELETED | &quot;DELETED&quot;



