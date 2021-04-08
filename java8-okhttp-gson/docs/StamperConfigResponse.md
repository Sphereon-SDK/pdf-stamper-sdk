
# StamperConfigResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claimParameters** | [**ClaimParameters**](ClaimParameters.md) |  |  [optional]
**configResources** | [**List&lt;StreamLocation&gt;**](StreamLocation.md) | Any registered resource used by the configuration |  [optional]
**creationTime** | [**OffsetDateTime**](OffsetDateTime.md) | The creation date/time of the initial configuration in ISO 8601 format |  [optional]
**credentials** | [**Credentials**](Credentials.md) |  |  [optional]
**configId** | **String** | The configuration id |  [optional]
**name** | **String** | An optional configuration name |  [optional]
**updateTime** | [**OffsetDateTime**](OffsetDateTime.md) | The last update date/time of this configuration in ISO 8601 format |  [optional]
**configStatus** | [**ConfigStatusEnum**](#ConfigStatusEnum) | The status of the config action |  [optional]
**config** | [**StamperConfig**](StamperConfig.md) | The PDF stamper configuration |  [optional]
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



