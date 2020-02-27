# PdfStamper.CanvasComponent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**border** | [**Border**](Border.md) | The border of the component | [optional] 
**specificPages** | **[Number]** |  | [optional] 
**connectors** | [**[Connector]**](Connector.md) | Connectors containing components that can be positioned relative to this component | [optional] 
**pageSelector** | **String** | Prescribes the page the component needs to be overlay-ed | 
**offset** | [**Point**](Point.md) | The offset of the component relative to the parent component | [optional] 
**pageOperation** | **String** | The operation that should be executed with the stamp component | 
**type** | **String** | The discriminator type for serialization of the different components | 


<a name="PageSelectorEnum"></a>
## Enum: PageSelectorEnum


* `FIRST_PAGE` (value: `"FIRST_PAGE"`)

* `LAST_PAGE` (value: `"LAST_PAGE"`)

* `EVEN_PAGES` (value: `"EVEN_PAGES"`)

* `ODD_PAGES` (value: `"ODD_PAGES"`)

* `ALL_PAGES` (value: `"ALL_PAGES"`)

* `SPECIFIC_PAGES` (value: `"SPECIFIC_PAGES"`)




<a name="PageOperationEnum"></a>
## Enum: PageOperationEnum


* `STAMP` (value: `"STAMP"`)




