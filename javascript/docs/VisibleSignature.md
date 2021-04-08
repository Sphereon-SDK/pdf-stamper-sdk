# PdfStamper.VisibleSignature

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pageSelector** | **String** | The page for the visible signature (multiple pages is not supported, call multiple stamp configurations if that is desired) | [optional] 
**connector** | [**Connector**](Connector.md) | The connector (location) for the visible signature | [optional] 
**imageComponent** | [**ImageComponent**](ImageComponent.md) | The image for the visible signature | [optional] 


<a name="PageSelectorEnum"></a>
## Enum: PageSelectorEnum


* `FIRST_PAGE` (value: `"FIRST_PAGE"`)

* `LAST_PAGE` (value: `"LAST_PAGE"`)

* `EVEN_PAGES` (value: `"EVEN_PAGES"`)

* `ODD_PAGES` (value: `"ODD_PAGES"`)

* `ALL_PAGES` (value: `"ALL_PAGES"`)

* `SPECIFIC_PAGES` (value: `"SPECIFIC_PAGES"`)




