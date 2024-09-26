import React from "react";

const PrivacyPolicy = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-4 text-center px-4 lg:max-w-[50vw] h-screen mx-auto">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Privacy policy</h1>
            <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl">General information</h3>
            <p>
                The following information provides a simple overview of what is done with your personal data.
                data
                when you visit this website. Personal data is all data with which you
                personally
                can be identified. Detailed information on the subject of data protection can be found in
                our
                data protection declaration listed below this text.
            </p>
            <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Data collection on this website</h3>
            <h4 className="font-medium text-xl md:text-2xl lg:text-3xl">Who is responsible for data collection on this website?</h4>
            <p>
                Data processing on this website is carried out by the website operator. The operator's contact details can be
                you
                the section &bdquo;Note on the responsible body&ldquo; in this privacy policy
                in this privacy policy.
            </p>
            <h4 className="font-medium text-xl md:text-2xl lg:text-3xl">How do we collect your data?</h4>
            <p>
                On the one hand, your data is collected when you provide it to us. This can be, for example
                to
                data that you enter in a contact form.
            </p>
            <p>
                Other data is collected automatically or with your consent by our IT systems when you visit the website.
                collected. This is primarily technical data (e.g. internet browser, operating system or time of the page view).
                This data is collected automatically as soon as you enter this website.
            </p>
            <h4 className="font-medium text-xl md:text-2xl lg:text-3xl">What do we use your data for?</h4>
            <p>
                Some of the data is collected in order to ensure error-free provision of the website. Other
                data can be used to analyse your user behaviour.
            </p>
            <h4 className="font-medium text-xl md:text-2xl lg:text-3xl">What rights do you have with regard to your data?</h4>
            <p>
                You have the right to receive information free of charge at any time about the origin, recipient and purpose of
                your
                stored personal data. You also have the right to request the correction or deletion of this data.
                erasure of this data. If you have given your consent to data processing,
                you can revoke this consent at any time for the future. Furthermore, you have the
                right, under certain circumstances, to request the restriction of the processing of your personal data.
                to
                request. You also have the right to lodge a complaint with the competent supervisory authority.
            </p>
        </section>
    );
};

export default PrivacyPolicy;