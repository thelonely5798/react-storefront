import Banner from "@/components/Banner";
import StoreLayout from "@/components/StoreLayout/index";
import { Category } from "hooks/types-hooks";
import { useRouter } from "node_modules/next/router";
import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Link from "next/link";
import { TextField } from "@mui/material";
import styled from "styled-components";
import DoneIcon from '@mui/icons-material/Done';
const BaseLabel = styled.div`
    background-color: #f2f2f2;
    width: fit-content;
    min-width: 100px;
    font-size: 16px;
    height: 50px;
    padding: 5px;
    display: flex;
    text-align:center;
    align-items:center;
    color: #a1a1a1;
    justify-content: center;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }
    &:not(:first-child) {
        margin-left: 5px;
    }
    & .active {
        color: blue;
    }

`
export default function Index() {
    const router = useRouter()
    const [categories, setCategories] = useState([
        {
            name: "Tất cả",
        },
        {
            name: "Mũ"
        }
    ])

    return (
        <StoreLayout>
            <div className="pb-16 pt-16">
                <div className="flex justify-center items-center">
                    <div className="flex w-full">
                        <div className="w-auto p-5">
                        <div className="text-lg font-bold">Phân loại</div>
                            <div className="p-4 grid grid-cols-4 gap-2">
                                
                                {categories.map((category, index) => {
                                    const { name } = category
                                    return (
                                        <BaseLabel key={index}>{name} <DoneIcon /></BaseLabel>
                                    )
                                })}
                            </div>
                            <div>
                                <div className="text-lg font-bold">Bộ lọc sản phẩm</div>
                                <div className="p-4 flex w-100 items-center">
                                    <div >Giá</div>
                                    <div className="flex ml-4">
                                        <div className="item">
                                            <TextField size="small" id="outlined-basic" label="Giá từ" variant="outlined" />
                                        </div>
                                        <div className="item ml-4">
                                            <TextField size="small" id="outlined-basic" label="tới" variant="outlined" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className=" grid lg:grid-cols-5 grid-cols-2 gap-4 mt-4">
                                <div>
                                    <div className="relative group">
                                        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                        <img className="object-cover h-96 w-full" src="https://i.ibb.co/5vxgf7V/pexels-quang-anh-ha-nguyen-884979-1.png" alt="Girl posing for an Img" />
                                        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                            <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                            <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                        </div>
                                    </div>

                                    <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                                    <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
                                </div>
                                <div>
                                    <div className="relative group">
                                        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                        <img className="object-cover h-96 w-full" src="https://i.ibb.co/HKFXSrQ/pietra-schwarzler-l-SLq-x-Qd-FNI-unsplash.png" alt="A blonde girl posing" />
                                        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                            <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                            <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                                                <Link href="/product/1">
                                                    Quick View
                                                </Link>
                                            </button>
                                        </div>
                                    </div>

                                    <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
                                    <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
                                    <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p>
                                </div>
                                <div>
                                    <div className="relative group">
                                        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                        <img className="object-cover h-96 w-full" src="https://i.ibb.co/BKsqym2/tracey-hocking-ve-Zp-XKU71c-unsplash.png" alt="A girl wearing white suit posing in desert" />
                                        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                            <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                            <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                        </div>
                                    </div>

                                    <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                                    <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
                                </div>
                                <div>
                                    <div className="relative group">
                                        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                        <img className="object-cover h-96 w-full" src="https://i.ibb.co/mbrk1DK/pexels-h-i-nguy-n-4034532.png" alt="Girl wearing pink suit posing" />
                                        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                            <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                            <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                        </div>
                                    </div>
                                    <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                                    <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StoreLayout>
    );
}
