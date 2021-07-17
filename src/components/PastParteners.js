import React from 'react';
import Carousel from 'react-elastic-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import nile from '../static/images/Parteners/nileuniversty.png'
import intel from '../static/images/Parteners/intel.png'
import research from '../static/images/Parteners/research.png'
import nilepreneurs from '../static/images/Parteners/nilepreneurs.png'
import microsoft from '../static/images/Parteners/microsoft.png'

const PastParteners = () => {
    const items = [
        {
            img: nile
        },
        {
            img: research
        },
        {
            img: nilepreneurs
        },
        {
            img: microsoft
        },
        {
            img: intel
        },
    ]
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 362, itemsToShow: 2},
        { width: 707, itemsToShow: 3 },
    ]

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === 'PREV' ? <FaChevronLeft /> : <FaChevronRight />
        return (
            <button class="arrow" onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }
    return (
        <div className="mb-5">
            <h2>Past parteners</h2>
            <hr />
            <Carousel itemPadding={[30, 0]} breakPoints={breakPoints} pagination={false} renderArrow={myArrow}>
                {items.map(item => (
                    <img class="partener" width="100" src={item.img}>
                        {item.title}
                    </img>
                ))}
            </Carousel>
        </div>
    )
}
export default PastParteners