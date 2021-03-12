package com.sphereon.sdk.pdf.stamper.model;

import io.swagger.annotations.ApiModelProperty;

public class VisibleSignature {
    @ApiModelProperty(value = "The connector (location) for the visible signature")
    private Connector connector;

    @ApiModelProperty(value = "The page for the visible signature (multiple pages is not supported, call multiple stamp configurations if that is desired)")
    private PageSelector pageSelector;

    @ApiModelProperty(value = "The image for the visible signature")
    private ImageComponent imageComponent;

    public Connector getConnector() {
        return connector;
    }

    public void setConnector(Connector connector) {
        this.connector = connector;
    }



    public ImageComponent getImageComponent() {
        return imageComponent;
    }

    public void setImageComponent(ImageComponent imageComponent) {
        this.imageComponent = imageComponent;
    }

    public PageSelector getPageSelector() {
        return pageSelector;
    }

    public void setPageSelector(PageSelector pageSelector) {
        this.pageSelector = pageSelector;
    }
}
