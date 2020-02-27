# PdfStamper.Lifecycle

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicableJobStatuses** | **[String]** | Job status needs to be in this list in order for the action to be performed! | [optional] 
**actionTime** | **Date** | The time at which the job and files will be deleted, regardless of whether it has been retrieved or not. Maximal time is 1 day from job creation | [optional] 
**action** | **String** | The action to perform. Currently only delete is supported | [optional] 
**type** | **String** | Determine when to delete the job and associated files.  RETRIEVAL means delete directly after retrieving the PDF file. When the file has not been retrieved before the action time, it will be deleted regardless.  Time means, delete on specific time, regardless of whether it has been processed | [optional] 


<a name="[ApplicableJobStatusesEnum]"></a>
## Enum: [ApplicableJobStatusesEnum]


* `CREATED` (value: `"CREATED"`)

* `INPUTS_UPLOADED` (value: `"INPUTS_UPLOADED"`)

* `PROCESSING` (value: `"PROCESSING"`)

* `DONE` (value: `"DONE"`)

* `ERROR` (value: `"ERROR"`)

* `DELETED` (value: `"DELETED"`)




<a name="ActionEnum"></a>
## Enum: ActionEnum


* `DELETE` (value: `"DELETE"`)

* `NONE` (value: `"NONE"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `RETRIEVAL` (value: `"RETRIEVAL"`)

* `TIME` (value: `"TIME"`)




