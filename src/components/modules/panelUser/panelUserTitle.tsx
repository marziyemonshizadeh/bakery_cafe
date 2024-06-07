type PanelUserTitleProps = { text: string };

function PanelUserTitle({ text }: PanelUserTitleProps) {
  return (
    <h2 className="font-bold text-2xl border-b border-x-amber-800 py-4">
      {text}
    </h2>
  );
}

export default PanelUserTitle;
