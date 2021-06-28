import marked from "marked";

type PreviewProps = {
  text: string;
};

const Preview = ({ text }: PreviewProps) => {
  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  return (
    <div
      id="preview"
      className="h-full p-3 text-lg w-6/12 prose max-w-none overflow-x-scroll"
      dangerouslySetInnerHTML={{ __html: marked(text) }}
    />
  );
};

export default Preview;
