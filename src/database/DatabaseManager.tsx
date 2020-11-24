import * as SQLite from 'expo-sqlite';
import { INote } from '../components/shared/interface/INote';

const db = SQLite.openDatabase("database.db");


export default class DatabaseManager {

    static ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
        db.transaction((trans) => {
            trans.executeSql(sql, params, (trans, results) => {
                resolve(results);
            },
                (error) => {
                    reject(error);
                });
        });
    });

    static initializeDatabase(): void {
        db.transaction(tx => {
            tx.executeSql(
                "create table if not exists\
                    note (\
                        note_id integer primary key autoincrement not null,\
                        text text not null\
                );"
            );
        }, (e) => { console.log("ERREUR + " + e) },
            () => { console.log("OK + ") }
        );
    }



    static async deleteNoteWithId(id: number) {
        await this.ExecuteQuery("DELETE FROM note WHERE note_id=?", [id]);
    }

    static async createNote(note: string) {
        await this.ExecuteQuery("insert into\
        note(\
            text\
            )\
        values(\
            ?\
            )",
            [
                note
            ]
        );
    }

    static async getAllNote() {
        let result: INote[] = [];
        let selectQuery = await this.ExecuteQuery("SELECT * FROM note", []);
        var rows = selectQuery.rows;
        for (let i = 0; i < rows.length; i++) {
            var item = rows.item(i);
            result.push({
                text: item.text,
                id: item.note_id
            } as INote);
        }

        return result;
    }

}