import StoreLayout from "@/components/StoreLayout/index";
import { useRouter } from "node_modules/next/router";
import React, { useState } from "react";

export default function Index() {
    const router = useRouter()
    console.log(router)
    return (
        <StoreLayout>
            <div>
                layoasd
            </div>
        </StoreLayout>
    );
}
