import { createApp } from "vue";

export const withSetup = (compsable: () => any) => {
    let result:any;

    const app = createApp({
        setup(){
            result = compsable();
            return () => {}
        }
    })

    app.mount(document.createElement('div'));
    
    return [result, app ] as const;
}