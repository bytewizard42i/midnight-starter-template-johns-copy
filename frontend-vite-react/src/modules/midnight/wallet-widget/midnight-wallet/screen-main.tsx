import IconLace from '../common/icons/icon-lace';
import { TooltipProvider } from '../common/tooltip';
import { useWallet, useWalletList } from '../hooks';
import WalletIcon from './wallet-icon';

export default function ScreenMain({
  setOpen,
}: {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setOpen: Function;
}) {
  const wallets = useWalletList();
  const { connectWallet } = useWallet();

  return (
    <TooltipProvider>
      <div className="grid gap-4 py-7 place-items-center gap-y-8"
      style={{ gridTemplateColumns: `repeat(${wallets.length}, minmax(0, 1fr))` }}>
        {wallets.map((wallet, index) => (
          <WalletIcon
            key={index}
            iconReactNode={<IconLace />}
            name={wallet.name == "mnLace" ? "LACE" : "UNDEFINED"}
            action={() => {
              connectWallet(wallet.name);
              setOpen(false);
            }}
          />
        ))}  
      </div>
    </TooltipProvider>
  );
}
