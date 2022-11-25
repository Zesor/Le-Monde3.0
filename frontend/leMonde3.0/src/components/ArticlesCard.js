const ArticlesCard = ({ walletId, CID, title, content }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[670px] md:mr-10 sm:mr-5 mr-0 my-5 articles-card">
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white">
      Wallet ID:
      <br />
      {walletId}
    </p>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-2">
      IPFS CID:
      <br />
      {CID}
    </p>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white mt-10">
      {title}
      <br />
      <br />
      {content}
    </p>
  </div>
);


export default ArticlesCard;