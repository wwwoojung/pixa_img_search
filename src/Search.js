import axios from "axios";
import { useEffect, useState } from "react";

const Search = () => {
    const [photo, setPhoto] = useState([]);

    const [input, setInput] = useState('pet');
    const [search, setSearch] = useState('');

    const inputHandler = (e) => {
        console.log(e.target.value);
        const { value } = e.target;
        setInput(value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (input.length < 3) {
            alert('더 입력하세요.');
            return
        }
        setSearch(input);
    }

    const getData = async () => {
        const r = await axios.get(`https://pixabay.com/api/?key=42380601-6a142c7c4cc110e88f6bc3927&q=${search}&image_type=photo&per_page=200`);
        const d = r.data.hits;

        setPhoto(d);
        console.log(d);
    }

    useEffect(() => {
        getData();
    }, [search])

    return (
        <>
            <section className="search">
                <div className="inner search_box">
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder="키워드를 입력하세요." onChange={inputHandler} />
                        <button> search</button>
                    </form>
                    <ul className="list">
                        {
                            photo.map((it, idx) => {
                                return (
                                    <li><img src={it.largeImageURL} alt="" /></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Search;