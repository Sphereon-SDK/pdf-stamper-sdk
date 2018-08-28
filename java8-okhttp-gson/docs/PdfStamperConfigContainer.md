
# PdfStamperConfigContainer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registeredResources** | [**List&lt;StreamLocation&gt;**](StreamLocation.md) |  |  [optional]
**creationTime** | [**OffsetDateTime**](OffsetDateTime.md) | The creation date/time of this job in ISO 8601 format |  [optional]
**configId** | **String** |  |  [optional]
**updateTime** | [**OffsetDateTime**](OffsetDateTime.md) | The last update date/time of this job in ISO 8601 format |  [optional]
**configStatus** | [**ConfigStatusEnum**](#ConfigStatusEnum) | The status of the configStatus action |  [optional]
**pdfStamperConfig** | [**PdfStamperConfig**](PdfStamperConfig.md) | The PDF stamper configuration |  [optional]
**statusMessage** | **String** | A status message, which can be informational, warning or error. A message here does not indicate an error per se |  [optional]


<a name="ConfigStatusEnum"></a>
## Enum: ConfigStatusEnum
Name | Value
---- | -----
CREATED | &quot;CREATED&quot;
UPDATED | &quot;UPDATED&quot;
RESOURCE_UPLOADED | &quot;RESOURCE_UPLOADED&quot;
ERROR | &quot;ERROR&quot;
DELETED | &quot;DELETED&quot;
DONE | &quot;DONE&quot;



