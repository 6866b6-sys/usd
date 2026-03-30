import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, ArrowDownLeft, ArrowUpRight, ExternalLink } from 'lucide-react';

const ColdWalletCard = ({ wallet, onDeposit, onWithdraw }) => {
  const maskAddress = (addr) => `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-colors">
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-card-foreground">{wallet.walletName}</h3>
              <p className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                {maskAddress(wallet.walletAddress)}
                <ExternalLink className="w-3 h-3 cursor-pointer hover:text-primary" />
              </p>
            </div>
          </div>
          {wallet.multiSigReady && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-primary/10 text-primary rounded">
              Multi-Sig
            </span>
          )}
        </div>

        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-1">Balance</p>
          <p className="text-2xl font-bold font-mono text-card-foreground">
            {wallet.balance.toFixed(4)} <span className="text-sm text-muted-foreground">BTC</span>
          </p>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 gap-2" variant="default" onClick={() => onDeposit(wallet)}>
            <ArrowDownLeft className="w-4 h-4" /> Deposit
          </Button>
          <Button className="flex-1 gap-2" variant="outline" onClick={() => onWithdraw(wallet)}>
            <ArrowUpRight className="w-4 h-4" /> Withdraw
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColdWalletCard;
