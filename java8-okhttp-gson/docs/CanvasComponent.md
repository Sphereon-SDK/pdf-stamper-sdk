
# CanvasComponent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**border** | [**Border**](Border.md) | The border of the component |  [optional]
**specificPages** | **List&lt;Integer&gt;** |  |  [optional]
**connectors** | [**List&lt;Connector&gt;**](Connector.md) | Connectors containing components that can be positioned relative to this component |  [optional]
**pageSelector** | [**PageSelectorEnum**](#PageSelectorEnum) | Prescribes the page the component needs to be overlay-ed | 
**offset** | [**Point**](Point.md) | The offset of the component relative to the parent component |  [optional]
**pageOperation** | [**PageOperationEnum**](#PageOperationEnum) | The operation that should be executed with the stamp component | 
**type** | **String** | The discriminator type for serialization of the different components | 


<a name="PageSelectorEnum"></a>
## Enum: PageSelectorEnum
Name | Value
---- | -----
FIRST_PAGE | &quot;FIRST_PAGE&quot;
LAST_PAGE | &quot;LAST_PAGE&quot;
EVEN_PAGES | &quot;EVEN_PAGES&quot;
ODD_PAGES | &quot;ODD_PAGES&quot;
ALL_PAGES | &quot;ALL_PAGES&quot;
SPECIFIC_PAGES | &quot;SPECIFIC_PAGES&quot;


<a name="PageOperationEnum"></a>
## Enum: PageOperationEnum
Name | Value
---- | -----
STAMP | &quot;STAMP&quot;



