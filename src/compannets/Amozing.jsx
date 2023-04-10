import list from '../data';
import Header from './Header'

const Amazon = (handleClick) => {
    return (
        <>
            <div className=' container mx-auto mt-7  grid gap-4 grid-cols-3  '>
                {list?.map((item) => (
                    <Header  key={item.id} item={ item } handleClick={handleClick} />
                ))}
            </div>
        </>
    );
};
export default Amazon;