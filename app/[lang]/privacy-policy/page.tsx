import React from "react";
import { getDictionary } from "../locales";

const PrivacyPolicy = async ({ params }: ServerLocalesParams) => {
    const locales = await getDictionary(params.lang);
    const { title, generalInformationTitle, generalInformationText, dataCollectionTitle, responsibleTitle, responsibleText, dataCollectionMethodTitle, dataCollectionMethodText1, dataCollectionMethodText2, dataUsageTitle, dataUsageText, dataRightsTitle, dataRightsText } = locales.privacyPolicy;

    return (
        <section className="legal-notice">
            <h1 className="title">{title}</h1>
            <h3>{generalInformationTitle}</h3>
            <p>
                {generalInformationText}
            </p>
            <h3>{dataCollectionTitle}</h3>
            <h4>{responsibleTitle}</h4>
            <p>
                {responsibleText}
            </p>
            <h4>{dataCollectionMethodTitle}</h4>
            <p>
                {dataCollectionMethodText1}
            </p>
            <p>
                {dataCollectionMethodText2}
            </p>
            <h4>{dataUsageTitle}</h4>
            <p>
                {dataUsageText}
            </p>
            <h4>{dataRightsTitle}</h4>
            <p>
                {dataRightsText}
            </p>
        </section>
    );
};

export default PrivacyPolicy;