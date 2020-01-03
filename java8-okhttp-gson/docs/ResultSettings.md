
# ResultSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lifecycle** | [**Lifecycle**](Lifecycle.md) | The lifecycle of result files |  [optional]
**storageMode** | [**StorageModeEnum**](#StorageModeEnum) | Storage mode. Can be a configured storage location on the storage API, or replacing the input files (streamlocations). |  [optional]
**storageLocation** | [**StorageLocation**](StorageLocation.md) | Result Storage location |  [optional]


<a name="StorageModeEnum"></a>
## Enum: StorageModeEnum
Name | Value
---- | -----
STORAGE_LOCATION | &quot;STORAGE_LOCATION&quot;
REPLACE_INPUT | &quot;REPLACE_INPUT&quot;



