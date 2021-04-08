
# Lifecycle

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicableJobStatuses** | [**List&lt;ApplicableJobStatusesEnum&gt;**](#List&lt;ApplicableJobStatusesEnum&gt;) | Job status needs to be in this list in order for the action to be performed! |  [optional]
**actionTime** | [**OffsetDateTime**](OffsetDateTime.md) | The time at which the job and files will be deleted, regardless of whether it has been retrieved or not. Maximal time is 1 day from job creation |  [optional]
**action** | [**ActionEnum**](#ActionEnum) | The action to perform. Currently only delete is supported |  [optional]
**type** | [**TypeEnum**](#TypeEnum) | Determine when to delete the job and associated files.  RETRIEVAL means delete directly after retrieving the PDF file. When the file has not been retrieved before the action time, it will be deleted regardless.  Time means, delete on specific time, regardless of whether it has been processed |  [optional]


<a name="List<ApplicableJobStatusesEnum>"></a>
## Enum: List&lt;ApplicableJobStatusesEnum&gt;
Name | Value
---- | -----
CREATED | &quot;CREATED&quot;
INPUTS_UPLOADED | &quot;INPUTS_UPLOADED&quot;
PROCESSING | &quot;PROCESSING&quot;
DONE | &quot;DONE&quot;
ERROR | &quot;ERROR&quot;
DELETED | &quot;DELETED&quot;


<a name="ActionEnum"></a>
## Enum: ActionEnum
Name | Value
---- | -----
DELETE | &quot;DELETE&quot;
NONE | &quot;NONE&quot;


<a name="TypeEnum"></a>
## Enum: TypeEnum
Name | Value
---- | -----
RETRIEVAL | &quot;RETRIEVAL&quot;
TIME | &quot;TIME&quot;



