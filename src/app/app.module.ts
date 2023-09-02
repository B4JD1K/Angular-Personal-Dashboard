import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TabsComponent} from './tabs/tabs.component';
import {BookmarksComponent} from './bookmarks/bookmarks.component';
import {TodosComponent} from './todos/todos.component';
import {NotesComponent} from './notes/notes.component';
import {BookmarkTileComponent} from './bookmark-tile/bookmark-tile.component';
import {NoteCardComponent} from './note-card/note-card.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    NoteCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
