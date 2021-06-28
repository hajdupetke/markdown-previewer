type EditorProps = {
  setText: any;
  value: string;
};

const Editor = ({ setText, value }: EditorProps) => {
  return (
    <textarea
      onChange={(event) => setText(event.target.value)}
      className="h-full resize-none border-black border-r-2 p-3 text-lg w-6/12 rounded-none"
      id="editor"
    >
      {value}
    </textarea>
  );
};

export default Editor;
