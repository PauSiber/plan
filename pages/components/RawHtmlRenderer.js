import React from "react";

const RawHtmlRenderer = ({htmlContent}) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default RawHtmlRenderer;