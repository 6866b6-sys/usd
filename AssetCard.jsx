import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AssetCard = ({ asset, name, balance, value, percentage, change24h }) => {
  const isPositive = change24h >= 0;

  return (
    <Card className="bg-card border-border hover:shadow-lg transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">{asset.charAt(0)}</span>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">{asset}</h3>
                <p className="text-xs text-muted-foreground">{name}</p>
              </div>
            </div>
          </div>
          <div className={`flex items-center gap-1 text-sm font-medium ${
            isPositive ? 'text-primary' : 'text-destructive'
          }`}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {isPositive ? '+' : ''}{change24h.toFixed(2)}%
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-muted-foreground">Balance</span>
            <span className="font-mono font-semibold text-card-foreground">{balance.toFixed(4)} {asset}</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-muted-foreground">Value</span>
            <span className="font-mono font-semibold text-card-foreground">
              ${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-muted-foreground">Portfolio</span>
            <span className="font-semibold text-card-foreground">{percentage.toFixed(1)}%</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-1.5 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetCard;
