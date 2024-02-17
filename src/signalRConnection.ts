import { useEffect, useState } from "react";
import {
  HttpTransportType,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";

interface DataItem {
  X: number;
  Y: number;
  Z: number;
}

export const useSignalR = () => {
  const [initialData, setInitialData] = useState<DataItem[]>([]);

  //console.log({ dataArray });

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .configureLogging(LogLevel.Debug)
      .withUrl("https://localhost:7122/hub", {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .build();

    connection.start().then(() => {
      console.log("Connected to SignalR hub");
    });

    connection.on("ReceiveData", (receivedData: string) => {
      setInitialData(JSON.parse(receivedData));
    });

    return () => {
      connection.stop().then(() => {
        console.log("Disconnected from SignalR hub");
      });
    };
  }, []);

  return initialData;
};
