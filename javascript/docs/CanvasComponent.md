# PdfStamper.CanvasComponent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**border** | [**Border**](Border.md) | The border of the component | [optional] 
**specificPages** | **[Number]** |  | [optional] 
**connectors** | [**[Connector]**](Connector.md) | Connectors containing components that can be positioned relative to this component | [optional] 
**pageSelector** | **String** | Prescribes the page(s) the component needs to be overlay-ed on. | 
**offset** | [**Point**](Point.md) | The offset of the component relative to the parent component | [optional] 
**pageOperation** | **String** | The operation that should be executed with the stamp component | 
**position** | **String** | The position where the stamp end up relative to existing content. Only foreground is supported for now | 


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




<a name="PositionEnum"></a>
## Enum: PositionEnum


* `FOREGROUND` (value: `"FOREGROUND"`)

* `BACKGROUND` (value: `"BACKGROUND"`)




