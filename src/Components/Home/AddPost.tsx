import {useState, useEffect, FormEvent, ChangeEvent} from 'react';
import '../Style/AddPost.css';

const url = 'http://localhost:3000/news';

const AddPost = ()=>{

        const [title, setTitle] = useState<string>("")
        const [content, setContent] = useState<string>("")

        const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
                e.preventDefault();

                console.log(title, content);

                const news = {
                        title,
                        content,
                };

                const res = await fetch(url,{
                        method:"POST",
                        headers:{"Content-Type": "application/json"},
                        body: JSON.stringify(news)
                });

                const addNews = await res.json();

                setTitle("");
                setContent("")


        }


        return(
                <div>
                      <div className="form">

                        <form onSubmit={handleSubmit}>
                                <h2>Cadastre sua noticia</h2>
                                <input value={title} type="text" placeholder="Titulo da sua noticia" onChange={(e)=>setTitle(e.target.value)}/>
                                <textarea value={content} placeholder="Conteudo da sua notica" onChange={(e)=>setContent(e.target.value)}></textarea>
                                <input id="submit" type="submit" value="cadastrar" />
                        </form>

                      </div>



                </div>
            )



}

export default AddPost