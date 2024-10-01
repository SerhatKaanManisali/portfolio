import React from "react";
import { getDictionary } from "../locales";

const Imprint = async ({ params }: ServerLocalesParams) => {
    const locales = await getDictionary(params.lang);
    const {title, subtitle1, subtitle2} = locales.imprint;

    return (
        <section className="legal-notice">
            <h1 className="title">{title}</h1>
            <h3>{subtitle1}</h3>
            <p>Serhat Kaan Manisali<br />Heinrich-Siems-Stra&szlig;e 7<br />38642 Goslar</p>
            <h3>{subtitle2}</h3>
            <p>Phone: +49 (0) 178 69 68 886<br />e-mail: mail&#64;serhat-kaan-manisali.com</p>
        </section>
    );
};

export default Imprint;