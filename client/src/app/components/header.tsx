'use client'
import { Header } from "antd/es/layout/layout"
import { Menu, Input } from "antd";

import type { GetProps } from 'antd';

const itemMenu = [
    {key: '/phim-moi', label: 'Phim mới'},
    {key: '/phim-le', label: 'Phim lẻ'},
    {key: '/phim-bo', label: 'Phim bộ'},
    {key: '/the-loai', label: 'Thể loại', children: [
        {
            key: 1,
            label: 'Phim hành động'
        },
        {
            key: 2,
            label: 'Phim tình cảm'
        },
       
    ]},
    {key: '/quoc-gia', label: 'Quốc gia'},
    {key: '/phim-chieu-rap', label: 'Phim chiếu rap'},
    {key: '/top-phim', label: 'Top phim'},

]
type SearchProps = GetProps<typeof Input.Search>

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value, 'xin chào');

const { Search  } = Input;

export default function header() {
    return (
        <Header className="bg-white" style={{background:'#fff', height: 'auto'}}>
            <div className="flex">
                <div className="logo w-[20%]">Web của dũng</div>
                <Menu  mode="horizontal" className="w-[80%] uppercase border-none" style={{border:0}} theme="light" items={itemMenu} />
            </div>
            <div className="flex justify-end">
                <div className="w-[30%]">
                    <Search  placeholder="Tên phim" onSearch={onSearch}  />
                </div>
            </div>
        </Header>
    )
}