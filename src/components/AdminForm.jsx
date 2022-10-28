import React, { useEffect, useState } from "react";
import { TagsInput } from "react-tag-input-component";
import '../styles/tags.scss'

const FormGroup = ({ ENDPOINT }) => {

    const [files, setFiles] = useState([])
    const [tables, setTables] = useState([
        {
            Title: "",
            Colors: [],
            Description: "",
            Images: [],
            Hashtags: []
        }
    ])

    const [form, setForm] = useState(
        {
            Title: "",
            Colors: [],
            Description: "",
            Hashtags: []
        }
    )

    const sendFiles = (e) => {
        e.preventDefault()
        const convert = new FormData()

        files.map((_, index) => {
            convert.append('file', files[index])
        })

        convert.append('data', JSON.stringify(form))

        fetch(ENDPOINT + '/admin/upload', {
            method: 'POST',
            body: convert,
            credentials: "include"
        })
            .then(result => result.json())
            .then(() => {
                getData()
            })
            .catch(err => console.log(err))
    }

    const handleFiles = (e) => {
        e.preventDefault()
        const list = e.target.files
        let finalFile = []
        for (let i = 0; i < list.length; i++) {
            finalFile.push(list[i])
        }
        setFiles(finalFile);
    }

    let handleChange = (e) => {
        setForm(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        });
    }

    const setColors = (e) => {
        setForm(prev => {
            return { ...prev, Colors: e }
        })
    }

    const setHashtags = (e) => {
        setForm(prev => {
            return { ...prev, Hashtags: e }
        })
    }

    const getData = async () => {
        fetch(ENDPOINT + '/admin/post', {
            credentials: "include"
        })
            .then(res => res.json())
            .then(resp => {
                console.log(resp)
                setTables(resp)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <form onSubmit={e => e.preventDefault()} >

            <table className="table w-full">

                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Colors</th>
                        <th>Hashtags</th>
                        <th>Images</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {tables.map((table, index) => {
                        return <tr key={index}>
                            <td>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <p className="font-bold">{table.Title}</p>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <p className="text-sm">{table.Description}</p>
                                </div>
                            </td>
                            <td>
                                <div className="flex">
                                    {
                                        table.Colors
                                            .map((color, index) => <div
                                                key={index}
                                                style={{
                                                    background: color,
                                                    width: 25,
                                                    height: 25,
                                                }}
                                                className="mx-1"
                                            >
                                            </div>
                                            )
                                    }
                                </div>
                            </td>
                            <td>
                                <div className="flex">
                                    {
                                        table.Hashtags
                                            .map((hashtag, index) => <a
                                                href=""
                                                key={index}
                                                className="mx-1 text-blue-600"
                                            >
                                                {hashtag}
                                            </a>
                                            )
                                    }
                                </div>
                            </td>
                            <td>
                                <div className="flex">
                                    {
                                        table.Images
                                            .map((url, index) => <img className="mx-2" key={index} src={"https://storage.googleapis.com" + url} alt={`fashion-${index}`} width={100} />)
                                    }
                                </div>
                            </td>
                            <td>
                                <div className="flex flex-row">
                                    <div>
                                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                                    </div>
                                    <div>
                                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                                    </div>
                                </div>
                            </td>
                        </tr>

                    })}

                </tbody>

                <tfoot>
                    <tr>
                        <td>
                        </td>
                        <td className="form-inline">
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="Title"
                                placeholder="Enter title"
                                value={form.Title}
                                onChange={handleChange}
                            />
                        </td>
                        <td className="form-inline" >
                            <textarea
                                placeholder="Enter description"
                                className="textarea bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="Description"
                                value={form.Description}
                                onChange={handleChange}
                            />
                        </td>
                        <td className="form-inline" >
                            <TagsInput
                                classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={form.Colors}
                                onChange={setColors}
                                name="Colors"
                                placeHolder="Enter color"
                            />
                        </td>
                        <td className="form-inline" >
                            <TagsInput
                                classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={form.Hashtags}
                                onChange={setHashtags}
                                name="Hashtags"
                                placeHolder="Enter hashtag"
                            />
                        </td>
                        <td className="form-inline">
                            <input
                                multiple
                                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                type="file"
                                name="file"
                                onChange={(e) => handleFiles(e)}
                            />

                            <div className="flex flex-wrap">
                                {
                                    files && files.map((obj, index) => {
                                        const src = URL.createObjectURL(obj)
                                        return <img className="mx-2" key={index} src={src} alt={files[index].name} width={100} />
                                    })
                                }
                            </div>
                        </td>
                        <td>
                            <button
                                onClick={sendFiles}
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Upload
                            </button>
                        </td>
                    </tr>
                </tfoot>

            </table>

        </form>

    )
}

export default FormGroup