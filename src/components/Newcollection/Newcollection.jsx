import React from 'react'
import './newcollection.css'
import new_collcetion from '../Assets/new_collections'
import Item from '../item/Item'

const Newcollection = () => {
    return (
        <div className='new-collection'>
            <h1>NEW COLLECTINS</h1>
            <hr />
            <div className="collections">
                {new_collcetion.map((item, i) => {
                    return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default Newcollection
