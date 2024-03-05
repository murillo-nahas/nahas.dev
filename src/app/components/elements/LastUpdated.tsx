type LastUpdatedProps = {
  date: string;
};

export function LastUpdated({ date }: LastUpdatedProps) {
  return (
    <p className="mt-8 font-medium text-sm text-textGrayDarker">
      Last updated on {date}
    </p>
  );
}
