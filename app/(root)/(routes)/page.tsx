"use client"

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-model";
import { UserButton } from "@clerk/nextjs";


const SetupPage = () => {
  const onOpen = useStoreModal((state: { onOpen: any; }) => state.onOpen);
  const isOpen = useStoreModal((state: { isOpen: any; }) => state.isOpen);

  useEffect(()=>{
    if(!isOpen){
      onOpen()
    }
  },[isOpen , onOpen])


    return null;
  }

export default SetupPage
  