export interface Message {
    _id: string;
    subject: string;
    folder: string;
    from: string;
    to: string;
    date: string;
    corpus: string;
    senderName: { last: string, first: string };
}
