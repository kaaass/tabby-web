import { Component } from '@angular/core'
import { LoginService, CommonService } from 'src/common'

import { faOpenid } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loggedIn: any
  ready = false

  providers = [
    { name: 'Open ID', icon: faOpenid, cls: 'btn-primary', id: 'oidc' },
  ]

  constructor (
    private loginService: LoginService,
    public commonService: CommonService,
  ) { }

  async ngOnInit () {
    await this.loginService.ready$.toPromise()
    this.loggedIn = !!this.loginService.user
    this.ready = true
  }
}
