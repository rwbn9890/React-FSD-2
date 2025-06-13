import React, { useEffect } from "react";
import { useCurrency } from "../context/CurrencyContext";
import { flag } from "../conf/flag";

const Select = ({ curData, setCur, cur }) => {

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

  // console.log(curData);
  let keys = Object.keys(curData);
  
  function findFlag(n){

    
    // console.log(flag[0])
      let flg = flag.find((ele) => ele.code == n.toLocaleUpperCase())
     
      // console.log(flg.name)
      // console.log(n.toLocaleUpperCase())
      // console.log( typeof(flag[0].code))
      // console.log(typeof(n))
      // console.log(flag[0].code == n)
      if(flg)
      {
        return flg.flag
      }
      return "--"

  }

  // useEffect(()=>{
  //   findFlag("USD")
  // }, [])

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
      <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <img alt="" src={selected.avatar} className="size-5 shrink-0 rounded-full" />
            <span className="block truncate">{selected.name}</span>
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
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <img alt="" src={person.avatar} className="size-5 shrink-0 rounded-full" />
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{person.name}</span>
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
