import React from "react";
import Button from "./Component/Button";
import Field from "./Component/Field";

export default function Header() {
    return (
        <header className="fixed py-6 px-24 w-full flex justify-end bg-white-500">
            <form className="w-[324px] flex">
                <Field placeholder="Cari Produk" />
                <Button
                    label={<ion-icon name="search-outline"></ion-icon>}
                    color="fill"
                />
            </form>
        </header>
    );
}
