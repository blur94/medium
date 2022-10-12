import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useCallback } from 'react';

export const ContextComponent = createContext();

const ContextProvider = (props) => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPost = async () => {
        await axios.get('/post')
            .then(res => {
                // console.log(res);
                setPost(res.data);
                console.log(post);
            })
    };

    useEffect(() => {
        getPost()
    }, []);

    return (
        <>
            <ContextComponent.Provider value={{ post, setPost, loading, setLoading }}>
                {props.children}
            </ContextComponent.Provider>
        </>
    );

};

export default ContextProvider;