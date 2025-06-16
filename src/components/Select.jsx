import React, { useEffect } from "react";
import { useCurrency } from "../context/CurrencyContext";
import { flag } from "../conf/flag";

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

const Select = ({ curData, setCur, cur }) => {
    const [selected, setSelected] = useState({code:cur, flg:""})

  let keys = Object.keys(curData);
  
  function findFlag(n){

      let flg = flag.find((ele) => ele.code == n.toLocaleUpperCase())
     
      if(flg)
      {
        return flg.flag
      }
      return "--"

  }
  console.log(flag)

  return (
    <>
      {/* <ul value={cur} onClick={} style={{width:"200px", height:"40px", overflow:"hidden"}}
        onChange={(e) => setCur(e.target.value)}
      >
        {keys.map((ele) => (
          <li key={ele} value={ele}>
            <img src={findFlag(ele)} />
              {ele.toLocaleUpperCase()}--
           {/* <p className="text-green"> { findFlag(ele)}</p> 
              </li>
        ))}
      </ul>
      */}
 
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-2 w-sm">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <img alt="" src={selected.cur} className="size-5 shrink-0 rounded-full" />
            <span className="block truncate">{selected.flg}</span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {keys.map((ele) => (
            <ListboxOption
              key={ele}
              value={ele}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <img alt="" src={findFlag(ele)} className="size-5 shrink-0 rounded-full" />
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{ele.toLocaleUpperCase()}</span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
    </> 
  );
};

export default Select;
