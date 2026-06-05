"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Switch } from "@/components/ui/switch";
import { DateFilter, dateFiltersData, useFilter } from "./hooks";
import { useState } from "react";

type MobileFilterProps = {
  isHindiSelectedInitial: boolean;
  selectedMonthInitial: DateFilter;
  onApplyFilter: (isHindiSelected: boolean, selectedMonth: DateFilter) => void;
};

const MobileFilter: React.FC<MobileFilterProps> = ({
  isHindiSelectedInitial,
  selectedMonthInitial,
  onApplyFilter,
}) => {
  const { isHindiSelected, onLanguageCheckChanged, onChangeSelectedMonth } =
    useFilter(false, dateFiltersData[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenFilter = () => {
    onLanguageCheckChanged(isHindiSelectedInitial);
    onChangeSelectedMonth(selectedMonthInitial);
    setIsOpen(true);
  };

  const handleApplyFilter = () => {
    onApplyFilter(isHindiSelected, selectedMonthInitial);
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button
          onClick={handleOpenFilter}
          className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/20 rounded-full text-[12px] mono tracking-wider uppercase text-white hover:border-accent hover:text-accent transition-colors"
        >
          <span>Filter</span>
          <span className="mono text-[10px]">
            {isHindiSelectedInitial ? "HI" : "EN"}
          </span>
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-black border-t border-white/10 text-white">
        <DrawerHeader className="text-left">
          <DrawerTitle className="display text-2xl tracking-tight">
            Filter the feed
          </DrawerTitle>
          <DrawerDescription className="text-[13px] text-white/55">
            Choose your language. More filters coming soon.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between border-y border-white/10 py-5">
            <div className="mono text-[11px] tracking-[0.2em] uppercase text-white/60">
              Language
            </div>
            <div className="flex items-center gap-3">
              <span
                className={
                  isHindiSelected ? "text-white/50 text-sm" : "text-white text-sm font-medium"
                }
              >
                English
              </span>
              <Switch
                checked={isHindiSelected}
                onCheckedChange={onLanguageCheckChanged}
              />
              <span
                className={
                  isHindiSelected ? "text-white text-sm font-medium" : "text-white/50 text-sm"
                }
              >
                Hindi
              </span>
            </div>
          </div>
        </div>
        <DrawerFooter className="px-6 pb-8">
          <button
            onClick={handleApplyFilter}
            className="w-full bg-white text-black py-3.5 text-[13px] mono tracking-[0.15em] uppercase rounded-full hover:bg-accent hover:text-white transition-colors"
          >
            Apply
          </button>
          <DrawerClose asChild>
            <button className="w-full py-2 text-[12px] text-white/55 hover:text-white">
              Cancel
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFilter;
