# PdfStamper.StamperConfigResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configResources** | [**[StreamLocation]**](StreamLocation.md) | Any registered resource used by the configuration | [optional] 
**creationTime** | **Date** | The creation date/time of the initial configuration in ISO 8601 format | [optional] 
**configId** | **String** | The configuration id | [optional] 
**name** | **String** | An optional configuration name | [optional] 
**updateTime** | **Date** | The last update date/time of this configuration in ISO 8601 format | [optional] 
**configStatus** | **String** | The status of the config action | [optional] 
**config** | [**StamperConfig**](StamperConfig.md) | The PDF stamper configuration | [optional] 
**statusMessage** | **String** | A status message, which can be informational, warning or error. A message here does not indicate an error per se | [optional] 


<a name="ConfigStatusEnum"></a>
## Enum: ConfigStatusEnum


* `CREATED` (value: `"CREATED"`)

* `UPDATED` (value: `"UPDATED"`)

* `RESOURCE_UPLOADED` (value: `"RESOURCE_UPLOADED"`)

* `ERROR` (value: `"ERROR"`)

* `DELETED` (value: `"DELETED"`)

* `DONE` (value: `"DONE"`)




