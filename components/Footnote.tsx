const FootnoteContent = ({ id }: { id: number }) => {
  return (
    <a style={{ verticalAlign: "super", fontSize: "smaller" }} className="nx-text-primary-600" id={`fnref:${id}`} href={`#fn:${id}`}>
      {id}
    </a>
  );
};

const FootnoteRef = ({ id }: { id: number }) => {
  return (
    <a className="nx-text-primary-600" id={`fn:${id}`} href={`#fnref:${id}`}>
      ↩︎
    </a>
  );
};

export { FootnoteContent, FootnoteRef };
