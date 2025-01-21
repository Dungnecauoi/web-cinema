'client'
import { Header } from "antd/es/layout/layout"
import { Menu } from "antd"

const itemMenu = [
    {key: '/phim-moi', label: 'Phim mới'},
    {key: '/phim-le', label: 'Phim lẻ'},
    {key: '/phim-bo', label: 'Phim bộ'},
    {key: '/the-loai', label: 'Thể loại'},
    {key: '/quoc-gia', label: 'Quốc gia'},
    {key: '/phim-chieu-rap', label: 'Phim chiếu rap'},
    {key: '/top-phim', label: 'Top phim'},

]

export default function header() {
    return (
        <Header className="bg-white flex" style={{background:'#fff'}}>
            <div className="logo w-[20%]">đây là logo</div>
            <Menu mode="horizontal" className="w-[80%] uppercase" theme="light" items={itemMenu} />
        </Header>
    )
}