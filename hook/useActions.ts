import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "./useTypedSelector";
import { bindActionCreators } from "@reduxjs/toolkit";
import { allActions } from "@/store/root.actions";

export const useActions = () => {

    const dispatch = useAppDispatch()

    return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}
