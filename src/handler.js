/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h)=>{
  const { title, tags, body } = request.payloard;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt
  };
  notes.push(newNote);

  const isSuccess = notes.filter((note)=>note.id === id).length > 0;

  if (isSuccess){
    const response = h.response({
      status:'success',
      message:'Catatan Berhasil Ditambahkan',
      data : {
        noteId : id
      }
    });
    response.code(201);
    return response;
  }

};


const getAllNotesHandler = () =>({
  status:'success',
  data:{
    notes,
  }
});


module.exports = { addNoteHandler, getAllNotesHandler };