import { Metadata } from "next";
import DsaComp from "../components/dsa/DsaComp";

export const revalidate = 60;

export const metadata: Metadata = {
    title: "DSA Record",
    description: "My DSA Record",
};

export default function Dsa() {
    return (
        <div className="fade-in py-8 px-2">
            <DsaComp />
        </div>
    );
}
