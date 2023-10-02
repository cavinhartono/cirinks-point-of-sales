import React from "react";

export default class Homepage extends React.Component {
    render() {
        return (
            <>
                <header className="fixed py-6 px-24 w-full flex justify-end bg-white">
                    <form className="w-[324px] flex">
                        <input
                            className="w-full border border-gray-300"
                            placeholder="Cari produk..."
                        />
                        <button
                            className="px-8 py-4 bg-red-500 text-white"
                            type="submit"
                        >
                            Go
                        </button>
                    </form>
                </header>
            </>
        );
    }
}
